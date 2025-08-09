import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet
} from 'react-native';
import { Image } from 'expo-image';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS, SHADOWS } from '../constants/theme';
import { truncateText } from '../utils/format';
import CircularGradientIcon from './CircularGradientIcon';
import Heading from './Heading';

/**
 * Enhanced Brand Card component matching exact specifications
 * @param {Object} brand - Brand object with id, name, shortDescription
 * @param {Function} onPress - Function to call when card is pressed
 */
export default function BrandCard({ brand, onPress }) {
  const { name, shortDescription, id, logoUrl } = brand;
  const [logoError, setLogoError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 2;

  
  React.useEffect(() => {
    setLogoError(false);
    setRetryCount(0);
  }, [logoUrl]);

 
  const gradientIndex = id ? parseInt(id) % 3 : 0;

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`${name?.toLowerCase()}: ${shortDescription?.toLowerCase()}`}
      accessibilityHint="Tap to see more information about this brand"
    >
      <View style={styles.content}>
        
        <View style={styles.logoContainer}>
          {logoUrl && !logoError ? (
            <Image 
              key={`${logoUrl}-${retryCount}`} 
              source={{ uri: logoUrl }}
              style={styles.logo}
              contentFit="contain"
              placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
              onLoadStart={() => {
                console.log('Loading logo for:', name, 'URL:', logoUrl);
                if (name?.toLowerCase().includes('mcdonald')) {
                  console.log('🍟 McDonald\'s logo loading details:', { name, logoUrl });
                }
              }}
              onLoad={() => {
                console.log('Logo loaded successfully for:', name);
                if (name?.toLowerCase().includes('mcdonald')) {
                  console.log('🍟 McDonald\'s logo loaded successfully!');
                }
              }}
              onError={(error) => {
                console.log('Logo failed to load for:', name, 'URL:', logoUrl, 'Error:', error);
                if (name?.toLowerCase().includes('mcdonald')) {
                  console.log('🍟 McDonald\'s logo failed to load:', error);
                }
                
                if (retryCount < maxRetries) {
                  console.log(`Retrying image load for ${name} (attempt ${retryCount + 1}/${maxRetries})`);
                  setRetryCount(prev => prev + 1);
                } else {
                  setLogoError(true); 
                }
              }}
              transition={200}
            />
          ) : (
            <CircularGradientIcon 
              size={56}
              gradientIndex={gradientIndex}
              style={styles.icon}
            />
          )}
        </View>

        
        <View style={styles.info}>
          <Heading 
            level={4}
            style={styles.name} 
            numberOfLines={1}
          >
            {name?.toLowerCase()}
          </Heading>
          <Text style={styles.description} numberOfLines={2}>
            {truncateText(shortDescription?.toLowerCase(), 80)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.CARD_BACKGROUND, 
    borderRadius: RADIUS.XL, 
    borderWidth: 2, 
    borderColor: COLORS.CARD_BORDER, 
    marginHorizontal: SPACING.LG,
    marginVertical: SPACING.SM,
    ...SHADOWS.MEDIUM,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.LG,
  },
  logoContainer: {
    marginRight: SPACING.LG,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    borderRadius: 28, 
    overflow: 'hidden', 
  },
  logo: {
    width: 48, 
    height: 48, 
    borderRadius: 24, 
    backgroundColor: '#FFFFFF', 
  },
  icon: {
    marginRight: 0,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    marginBottom: SPACING.XS,
   
  },
  description: {
    fontSize: TYPOGRAPHY.FONT_SIZE.DESCRIPTION, 
    fontFamily: TYPOGRAPHY.FONT_FAMILY.PRIMARY,
    fontWeight: TYPOGRAPHY.FONT_WEIGHT.NORMAL,
    color: COLORS.TEXT_PRIMARY, 
    lineHeight: TYPOGRAPHY.LINE_HEIGHT.NORMAL * TYPOGRAPHY.FONT_SIZE.DESCRIPTION,
  },
});
