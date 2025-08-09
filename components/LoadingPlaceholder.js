import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, RADIUS } from '../constants/theme';

const { width } = Dimensions.get('window');

/**
 * Loading placeholder component with enhanced shimmer effect
 * @param {number} count - Number of placeholder items to show
 * @param {string} type - Type of placeholder ('card' or 'detail')
 */
export default function LoadingPlaceholder({ count = 5, type = 'card' }) {
  if (type === 'detail') {
    return (
      <View style={styles.detailContainer}>
        {/* Logo placeholder */}
        <View style={styles.logoPlaceholder}>
          <LinearGradient
            colors={[COLORS.OVERLAY_LIGHT, COLORS.CARD_BACKGROUND]}
            style={styles.logoGradient}
          />
        </View>
        
        {/* Title placeholder */}
        <View style={styles.titlePlaceholder}>
          <LinearGradient
            colors={[COLORS.OVERLAY_LIGHT, COLORS.CARD_BACKGROUND]}
            style={styles.titleGradient}
          />
        </View>
        
        {/* Description placeholder */}
        <View style={styles.descriptionContainer}>
          {[...Array(4)].map((_, index) => (
            <View key={index} style={styles.descriptionLine}>
              <LinearGradient
                colors={[COLORS.OVERLAY_LIGHT, COLORS.CARD_BACKGROUND]}
                style={[
                  styles.descriptionGradient,
                  { width: index === 3 ? width * 0.6 : width * 0.8 }
                ]}
              />
            </View>
          ))}
        </View>
        
        {/* Button placeholder */}
        <View style={styles.buttonPlaceholder}>
          <LinearGradient
            colors={[COLORS.OVERLAY_LIGHT, COLORS.CARD_BACKGROUND]}
            style={styles.buttonGradient}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {[...Array(count)].map((_, index) => (
        <View key={index} style={styles.cardContainer}>
          <LinearGradient
            colors={[COLORS.OVERLAY_LIGHT, COLORS.CARD_BACKGROUND]}
            style={styles.cardGradient}
          >
            <View style={styles.cardContent}>
              {/* Logo placeholder */}
              <View style={styles.cardLogoPlaceholder}>
                <LinearGradient
                  colors={[COLORS.CARD_BACKGROUND, COLORS.OVERLAY_LIGHT]}
                  style={styles.cardLogoGradient}
                />
              </View>
              
              {/* Content placeholder */}
              <View style={styles.cardInfo}>
                <View style={styles.cardTitlePlaceholder}>
                  <LinearGradient
                    colors={[COLORS.CARD_BACKGROUND, COLORS.OVERLAY_LIGHT]}
                    style={styles.cardTitleGradient}
                  />
                </View>
                <View style={styles.cardDescriptionPlaceholder}>
                  <LinearGradient
                    colors={[COLORS.CARD_BACKGROUND, COLORS.OVERLAY_LIGHT]}
                    style={styles.cardDescriptionGradient}
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.LG,
  },
  // Detail page placeholders
  detailContainer: {
    alignItems: 'center',
    paddingHorizontal: SPACING.LG,
    paddingTop: 60,
  },
  logoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: SPACING.XL,
    overflow: 'hidden',
  },
  logoGradient: {
    flex: 1,
    borderRadius: 60,
  },
  titlePlaceholder: {
    width: width * 0.6,
    height: 36,
    borderRadius: RADIUS.SM,
    marginBottom: SPACING.XL,
    overflow: 'hidden',
  },
  titleGradient: {
    flex: 1,
    borderRadius: RADIUS.SM,
  },
  descriptionContainer: {
    width: '100%',
    marginBottom: SPACING.XL,
  },
  descriptionLine: {
    height: 20,
    marginBottom: SPACING.SM,
    borderRadius: RADIUS.XS,
    overflow: 'hidden',
  },
  descriptionGradient: {
    flex: 1,
    borderRadius: RADIUS.XS,
  },
  buttonPlaceholder: {
    width: width * 0.5,
    height: 56,
    borderRadius: RADIUS.LG,
    overflow: 'hidden',
  },
  buttonGradient: {
    flex: 1,
    borderRadius: RADIUS.LG,
  },
  // Card placeholders
  cardContainer: {
    marginHorizontal: SPACING.LG,
    marginVertical: SPACING.SM,
    borderRadius: RADIUS.LG,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: SPACING.LG,
    borderRadius: RADIUS.LG,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLogoPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: SPACING.LG,
    overflow: 'hidden',
  },
  cardLogoGradient: {
    flex: 1,
    borderRadius: 28,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitlePlaceholder: {
    height: 20,
    width: '70%',
    borderRadius: RADIUS.XS,
    marginBottom: SPACING.SM,
    overflow: 'hidden',
  },
  cardTitleGradient: {
    flex: 1,
    borderRadius: RADIUS.XS,
  },
  cardDescriptionPlaceholder: {
    height: 16,
    width: '90%',
    borderRadius: RADIUS.XS,
    overflow: 'hidden',
  },
  cardDescriptionGradient: {
    flex: 1,
    borderRadius: RADIUS.XS,
  },
});
