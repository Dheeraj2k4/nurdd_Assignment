import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
  StatusBar,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { getBrands } from '../services/api';
import { COLORS, TYPOGRAPHY, SPACING } from '../constants/theme';
import { ROUTES } from '../constants/routes';
import Header from '../components/Header';
import BrandCard from '../components/BrandCard';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import ErrorMessage from '../components/ErrorMessage';
import NewAnimatedGradient from '../components/NewAnimatedGradient';

// home screen
export default function HomeScreen() {
  const navigation = useNavigation();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  //fetching api
  const fetchBrands = async (isRefresh = false) => {
    try {
      if (!isRefresh) {
        setLoading(true);
      }
      setError(null);
      
      
      try {
        const apiData = await getBrands();
        setBrands(apiData || []);
      } catch (apiError) {
        console.log('API failed:', apiError.message);
        setError('Failed to load brands from API. Please check your connection.');
        setBrands([]);// empty array if api fails
      }
    } catch (err) {
      console.error('Error fetching brands:', err);
      setError(err.message || 'Failed to load brands');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  
  const handleRefresh = () => {
    setRefreshing(true);
    fetchBrands(true);
  };

  
  const handleBrandPress = (brand) => {
    navigation.navigate(ROUTES.BRAND_DETAIL, { 
      brandId: brand.id,
      brandName: brand.name 
    });
  };

  
  useEffect(() => {
    fetchBrands();
  }, []);


  const renderBrandItem = ({ item }) => (
    <BrandCard 
      brand={item} 
      onPress={() => handleBrandPress(item)}
    />
  );

  
  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No brands found</Text>
      <Text style={styles.emptySubtext}>
        Check your connection and try again
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <NewAnimatedGradient style={styles.gradient}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Header 
            title="TOP BRANDS TODAY" 
            subtitle="Discover amazing brands and their stories"
          />
        </View>

        {/* Content */}
        {loading && !refreshing ? (
          <LoadingPlaceholder count={6} type="card" />
        ) : error ? (
          <ErrorMessage 
            message={error}
            onRetry={() => fetchBrands()}
          />
        ) : (
          <FlatList
            data={brands}
            renderItem={renderBrandItem}
            keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                tintColor={COLORS.TEXT_PRIMARY}
                titleColor={COLORS.TEXT_PRIMARY}
                title="Pull to refresh"
              />
            }
            ListEmptyComponent={renderEmptyState}
            accessible={true}
            accessibilityLabel="List of brands"
          />
        )}
      </NewAnimatedGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  gradient: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: SPACING.LG,
    paddingBottom: SPACING.MD,
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: SPACING.LG,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.XL,
  },
  emptyText: {
    fontSize: TYPOGRAPHY.FONT_SIZE.SUBTITLE,
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
    marginBottom: SPACING.SM,
    fontFamily: TYPOGRAPHY.FONT_FAMILY.HEADING, 
  },
  emptySubtext: {
    fontSize: TYPOGRAPHY.FONT_SIZE.BODY,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    fontFamily: TYPOGRAPHY.FONT_FAMILY.PRIMARY, 
  },
});
