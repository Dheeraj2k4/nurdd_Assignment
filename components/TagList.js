import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';

const { width } = Dimensions.get('window');

/**
 * Tag List component for displaying brand tags as chips
 * @param {Array} tags - Array of tag strings
 * @param {Function} onTagPress - Optional function to call when tag is pressed
 */
export default function TagList({ tags = [], onTagPress }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tags</Text>
      <View style={styles.tagsWrapper}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            key={`${tag}-${index}`}
            style={styles.tagContainer}
            onPress={() => onTagPress && onTagPress(tag)}
            activeOpacity={onTagPress ? 0.7 : 1}
            accessible={true}
            accessibilityRole={onTagPress ? "button" : "text"}
            accessibilityLabel={`Tag: ${tag}`}
          >
            <LinearGradient
              colors={COLORS.ICON_GRADIENT_1}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.tagBorder}
            >
              <View style={styles.tagInner}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.LG,
    paddingHorizontal: SPACING.LG,
  },
  label: {
    fontSize: TYPOGRAPHY.FONT_SIZE.HEADING,
    fontWeight: TYPOGRAPHY.FONT_WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: TYPOGRAPHY.FONT_FAMILY.HEADING, 
    marginBottom: SPACING.MD,
  },
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tagContainer: {
    marginRight: SPACING.SM,
    marginBottom: SPACING.SM,
    maxWidth: width * 0.4, 
  },
  tagBorder: {
    padding: 2,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  tagInner: {
    backgroundColor: COLORS.TAG_BACKGROUND, 
    borderRadius: 18,
    paddingHorizontal: SPACING.MD,
    paddingVertical: SPACING.SM,
    minWidth: 60, 
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', 
  },
  tagText: {
    fontSize: TYPOGRAPHY.FONT_SIZE.CAPTION,
    fontWeight: TYPOGRAPHY.FONT_WEIGHT.MEDIUM,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: TYPOGRAPHY.FONT_FAMILY.PRIMARY, 
    textAlign: 'center',
    flexShrink: 1,
  },
});
