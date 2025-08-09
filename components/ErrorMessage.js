import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

/**
 * Error Message component with retry functionality
 * @param {string} message - Error message to display
 * @param {Function} onRetry - Function to call when retry button is pressed
 * @param {string} retryText - Custom retry button text
 */
export default function ErrorMessage({ 
  message = 'Something went wrong. Please try again.', 
  onRetry,
  retryText = 'Try Again'
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons 
          name="warning-outline" 
          size={48} 
          color={COLORS.ERROR} 
        />
      </View>
      
      <Text style={styles.message}>{message}</Text>
      
      {onRetry && (
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={onRetry}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel={retryText}
          accessibilityHint="Tap to retry the failed operation"
        >
          <View style={styles.retryContent}>
            <Ionicons 
              name="refresh-outline" 
              size={20} 
              color={COLORS.TEXT_PRIMARY} 
              style={styles.retryIcon}
            />
            <Text style={styles.retryText}>{retryText}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  iconContainer: {
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
    fontFamily: 'Inter-Regular',
  },
  retryButton: {
    backgroundColor: COLORS.CARD_BACKGROUND,
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.OVERLAY_LIGHT,
  },
  retryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  retryIcon: {
    marginRight: 8,
  },
  retryText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'Inter-SemiBold',
  },
});
