import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getBrandById } from '../services/api';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS, SHADOWS } from '../constants/theme';
import { formatUrl, isValidUrl } from '../utils/format';
import { PrimaryButton } from '../components/Button';
import TagList from '../components/TagList';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import ErrorMessage from '../components/ErrorMessage';
import DarkAnimatedGradient from '../components/DarkAnimatedGradient';
import CircularGradientIcon from '../components/CircularGradientIcon';
import Heading from '../components/Heading';
import GradientFollowButton from '../components/GradientFollowButton';

const { width } = Dimensions.get('window');

/**
 * Brand Detail Screen - Enhanced design matching the images
 */
export default function BrandDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { brandId, brandName } = route.params;

  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Fetch brand details from API
  const fetchBrandDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from API
      try {
        const brandData = await getBrandById(brandId);
        setBrand(brandData || null);
      } catch (apiError) {
        console.log('API failed for brand:', brandId, apiError.message);
        setError('Failed to load brand details from API. Please check your connection.');
        setBrand(null);
      }
    } catch (err) {
      console.error('Error fetching brand details:', err);
      setError(err.message || 'Failed to load brand details');
    } finally {
      setLoading(false);
    }
  };

  // Handle website link press
  const handleWebsitePress = async (url) => {
    const formattedUrl = formatUrl(url);
    
    if (!isValidUrl(formattedUrl)) {
      console.warn('Invalid URL:', url);
      return;
    }

    try {
      const supported = await Linking.canOpenURL(formattedUrl);
      if (supported) {
        await Linking.openURL(formattedUrl);
      } else {
        console.warn('Cannot open URL:', formattedUrl);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  // Handle follow button press
  const handleFollowPress = () => {
    setIsFollowing(!isFollowing);
  };

  // Handle back button press
  const handleBackPress = () => {
    navigation.goBack();
  };

  // Load brand details on component mount
  useEffect(() => {
    setLogoError(false); // Reset logo error when brand changes
    fetchBrandDetails();
  }, [brandId]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={COLORS.DETAIL_GRADIENT}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleBackPress}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <Ionicons name="arrow-back" size={24} color={COLORS.TEXT_PRIMARY} />
            </TouchableOpacity>
          </View>
          <LoadingPlaceholder type="detail" />
        </LinearGradient>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={COLORS.DETAIL_GRADIENT}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={handleBackPress}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <Ionicons name="arrow-back" size={24} color={COLORS.TEXT_PRIMARY} />
            </TouchableOpacity>
          </View>
          <ErrorMessage 
            message={error}
            onRetry={fetchBrandDetails}
          />
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.SURFACE} />
      
      <DarkAnimatedGradient style={styles.gradient}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBackPress}
            accessibilityRole="button"
            accessibilityLabel="Go back to brand list"
          >
            <Ionicons name="arrow-back" size={24} color={COLORS.TEXT_PRIMARY} />
          </TouchableOpacity>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Centered Brand Logo or Gradient Icon */}
          <View style={styles.logoContainer}>
            {brand?.logoUrl && !logoError ? (
              <View style={styles.brandLogoWrapper}>
                <Image 
                  source={{ uri: brand.logoUrl }}
                  style={styles.brandLogo}
                  contentFit="contain"
                  placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
                  onError={() => {
                    console.log('Brand logo failed to load for:', brand.name);
                    setLogoError(true); // Set error state to show fallback
                  }}
                  transition={200}
                />
              </View>
            ) : (
              <CircularGradientIcon 
                size={140}
                gradientIndex={brand?.id ? parseInt(brand.id) % 3 : 0}
              />
            )}
          </View>

          {/* Large Lowercase Brand Name */}
          <Heading 
            level={2}
            style={styles.brandName}
            color={COLORS.TEXT_PRIMARY}
          >
            {brand?.name?.toLowerCase()}
          </Heading>

          {/* Centered Paragraph Description */}
          <Text style={styles.description}>
            {brand?.longDescription || brand?.shortDescription}
          </Text>

          {/* Gradient Follow Button */}
          <View style={styles.followButtonContainer}>
            <GradientFollowButton
              title="Follow"
              isFollowing={isFollowing}
              onPress={handleFollowPress}
              accessibilityLabel={`${isFollowing ? 'Unfollow' : 'Follow'} ${brand?.name}`}
            />
          </View>

          {/* Tags */}
          {brand?.tags && brand.tags.length > 0 && (
            <TagList tags={brand.tags} />
          )}

          {/* Website Link */}
          {brand?.website && (
            <TouchableOpacity
              style={styles.websiteContainer}
              onPress={() => handleWebsitePress(brand.website)}
              accessibilityRole="link"
              accessibilityLabel={`Visit ${brand.name} website`}
            >
              <View style={styles.websiteContent}>
                <Ionicons 
                  name="globe-outline" 
                  size={20} 
                  color={COLORS.TEXT_PRIMARY} 
                />
                <Text style={styles.websiteText}>
                  Visit Website
                </Text>
                <Ionicons 
                  name="open-outline" 
                  size={16} 
                  color={COLORS.TEXT_SECONDARY} 
                />
              </View>
            </TouchableOpacity>
          )}
        </ScrollView>
      </DarkAnimatedGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SURFACE,
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.LG,
    paddingTop: SPACING.MD,
    paddingBottom: SPACING.LG,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.OVERLAY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSpacer: {
    width: 44,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: SPACING.XXL,
  },
  logoContainer: {
    marginBottom: SPACING.XL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLogoWrapper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFFFFF', // White background for brand logos
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.MD,
  },
  brandLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  brandName: {
    textAlign: 'center',
    marginBottom: SPACING.LG,
    paddingHorizontal: SPACING.LG,
    // Font properties handled by Heading component
  },
  description: {
    fontSize: TYPOGRAPHY.FONT_SIZE.BODY_LARGE,
    fontFamily: TYPOGRAPHY.FONT_FAMILY.PRIMARY, // Poppins Semi Bold for body text
    fontWeight: TYPOGRAPHY.FONT_WEIGHT.NORMAL,
    color: COLORS.TEXT_SECONDARY, // White slightly transparent on dark background
    textAlign: 'center',
    lineHeight: TYPOGRAPHY.LINE_HEIGHT.SPACIOUS * TYPOGRAPHY.FONT_SIZE.BODY_LARGE, // Increased line height
    marginBottom: SPACING.XL,
    paddingHorizontal: SPACING.XL,
  },
  followButtonContainer: {
    alignItems: 'center',
    marginBottom: SPACING.XL,
    paddingHorizontal: SPACING.LG,
  },
  buttonContainer: {
    paddingHorizontal: SPACING.LG,
    marginBottom: SPACING.XL,
    width: width,
  },
  websiteContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark semi-transparent background
    borderRadius: RADIUS.MD,
    marginHorizontal: SPACING.LG,
    marginTop: SPACING.LG,
    padding: SPACING.LG,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)', // Subtle white border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  websiteContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  websiteText: {
    fontSize: TYPOGRAPHY.FONT_SIZE.BODY,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    marginLeft: SPACING.SM,
    marginRight: SPACING.SM,
    fontFamily: TYPOGRAPHY.FONT_FAMILY.SEMIBOLD,
  },
});
