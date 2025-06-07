// src/components/LocationSEO.jsx
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Props:
 * - baseTitle: Your main title, e.g. "WhatsApp Business API & Chatbots | Celitix"
 * - baseDescription: A template description, using the token CITY, e.g.
 *     "Deploy WhatsApp Business API & Chatbots in CITY—automate customer conversations at scale."
 */
export default function LocationSEO({ baseTitle, baseDescription }) {
  const { search } = useLocation();

  // Your approved cities list:
  const validCities = useMemo(
    () => [
      'Jaipur, Rajasthan, India',
      'Rajasthan, India',
      'Pune, Maharashtra, India',
      'Hyderabad, Telangana, India',
      'Mumbai, Maharashtra, India',
      'Bengaluru, Karnataka, India',
      'New Delhi, Delhi, India',
      'Ghaziabad, Uttar Pradesh, India',
      'Gurugram, Haryana, India',
      'Sonipat, Haryana, India',
      'Surat, Gujarat, India',
      'Ahmedabad, Gujarat, India',
    ],
    []
  );

  // Pull ?city= from URL
  const rawCity = useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get('city')?.trim().toLowerCase() || '';
  }, [search]);

  // Validate and build display name
  const displayName = useMemo(() => {
    if (validCities.includes(rawCity)) {
      return rawCity.charAt(0).toUpperCase() + rawCity.slice(1);
    }
    return '';
  }, [rawCity, validCities]);

  // Title: with or without "— City"
  const title = displayName
    ? `${baseTitle} — ${displayName}`
    : baseTitle;

  // Description: replace CITY or strip out "in CITY"
  const description = displayName
    ? baseDescription.replace(/CITY/gi, displayName)
    : baseDescription.replace(/\s*in CITY/gi, '');

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </>
  );
}
