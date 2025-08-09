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

  // Reset error state when logoUrl changes
  React.useEffect(() => {
    setLogoError(false);
    setRetryCount(0);
  }, [logoUrl]);

  // Use brand id to determine gradient variation
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
        {/* Brand Logo or Circular Gradient Icon */}
        <View style={styles.logoContainer}>
          {logoUrl && !logoError ? (
            <Image 
              key={`${logoUrl}-${retryCount}`} // Force re-mount on retry
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
                  setLogoError(true); // Set error state to show fallback after max retries
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

        {/* Brand Info */}
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
    backgroundColor: COLORS.CARD_BACKGROUND, // rgba(0, 0, 0, 0.3)
    borderRadius: RADIUS.XL, // 20px radius
    borderWidth: 2, // 1-2px white border
    borderColor: COLORS.CARD_BORDER, // White border
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
    backgroundColor: '#FFFFFF', // White background container
    borderRadius: 28, // Circular container
    overflow: 'hidden', // Ensure content stays within bounds
  },
  logo: {
    width: 48, // Slightly smaller than container
    height: 48, // Slightly smaller than container
    borderRadius: 24, // Maintain circular shape
    backgroundColor: '#FFFFFF', // White background for logos
  },
  icon: {
    marginRight: 0, // Remove margin since it's inside logoContainer
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    marginBottom: SPACING.XS,
    // Font properties handled by Heading component
  },
  description: {
    fontSize: TYPOGRAPHY.FONT_SIZE.DESCRIPTION, // 16px for description
    fontFamily: TYPOGRAPHY.FONT_FAMILY.PRIMARY, // Poppins Semi Bold for body text
    fontWeight: TYPOGRAPHY.FONT_WEIGHT.NORMAL,
    color: COLORS.TEXT_PRIMARY, // White font
    lineHeight: TYPOGRAPHY.LINE_HEIGHT.NORMAL * TYPOGRAPHY.FONT_SIZE.DESCRIPTION,
  },
});
