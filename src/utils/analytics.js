// Analytics Tracking Utility for Facebook Pixel and GA4
// Replace PIXEL_ID and GA4_MEASUREMENT_ID with your actual IDs

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================
export const FB_PIXEL_ID = '1996973757366872';
export const GA4_MEASUREMENT_ID = 'G-11RTJKPN2T';

// ============================================
// FACEBOOK PIXEL EVENTS
// ============================================

/**
 * Track Facebook Pixel event
 * @param {string} eventName - Standard or custom event name
 * @param {object} params - Event parameters
 */
export const trackFBEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
    console.log(`[FB Pixel] ${eventName}`, params);
  }
};

/**
 * Track custom Facebook Pixel event
 * @param {string} eventName - Custom event name
 * @param {object} params - Event parameters
 */
export const trackFBCustomEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, params);
    console.log(`[FB Pixel Custom] ${eventName}`, params);
  }
};

// ============================================
// GOOGLE ANALYTICS 4 EVENTS
// ============================================

/**
 * Track GA4 event
 * @param {string} eventName - Event name
 * @param {object} params - Event parameters
 */
export const trackGA4Event = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
    console.log(`[GA4] ${eventName}`, params);
  }
};

// ============================================
// COMBINED TRACKING FUNCTIONS
// ============================================

/**
 * Track Page View
 * @param {string} pageName - Name of the page
 */
export const trackPageView = (pageName) => {
  // Facebook Pixel - PageView
  trackFBEvent('PageView');

  // GA4 - page_view
  trackGA4Event('page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.hash
  });
};

/**
 * Track Lead Event (Form submissions, Enquiry clicks)
 * @param {string} source - Where the lead came from
 * @param {object} additionalParams - Additional parameters
 */
export const trackLead = (source, additionalParams = {}) => {
  // Facebook Pixel - Lead
  trackFBEvent('Lead', {
    content_name: source,
    ...additionalParams
  });

  // GA4 - generate_lead
  trackGA4Event('generate_lead', {
    lead_source: source,
    ...additionalParams
  });
};

/**
 * Track Form Submission
 * @param {string} formName - Name of the form
 * @param {string} source - Source section
 */
export const trackFormSubmit = (formName, source) => {
  // Facebook Pixel - Lead (form submission is a lead)
  trackFBEvent('Lead', {
    content_name: formName,
    content_category: 'form_submission',
    source: source
  });

  // Facebook Pixel - CompleteRegistration
  trackFBEvent('CompleteRegistration', {
    content_name: formName,
    source: source
  });

  // GA4 - form_submission
  trackGA4Event('form_submission', {
    form_name: formName,
    form_source: source
  });
};

/**
 * Track Phone Click
 * @param {string} phoneNumber - Phone number clicked
 * @param {string} source - Source section
 */
export const trackPhoneClick = (phoneNumber, source) => {
  // Facebook Pixel - Contact
  trackFBEvent('Contact', {
    content_name: 'phone_click',
    content_category: 'contact',
    phone_number: phoneNumber,
    source: source
  });

  // GA4 - phone_click
  trackGA4Event('phone_click', {
    phone_number: phoneNumber,
    click_source: source,
    contact_method: 'phone'
  });
};

/**
 * Track Email Click
 * @param {string} email - Email address clicked
 * @param {string} source - Source section
 */
export const trackEmailClick = (email, source) => {
  // Facebook Pixel - Contact
  trackFBEvent('Contact', {
    content_name: 'email_click',
    content_category: 'contact',
    email: email,
    source: source
  });

  // GA4 - email_click
  trackGA4Event('email_click', {
    email_address: email,
    click_source: source,
    contact_method: 'email'
  });
};

/**
 * Track CTA Button Click
 * @param {string} buttonName - Name of the button
 * @param {string} source - Source section
 */
export const trackCTAClick = (buttonName, source) => {
  // Facebook Pixel - Custom event for CTA
  trackFBCustomEvent('CTAClick', {
    button_name: buttonName,
    source: source
  });

  // GA4 - cta_click
  trackGA4Event('cta_click', {
    button_name: buttonName,
    click_source: source
  });
};

/**
 * Track Modal Open
 * @param {string} modalName - Name of the modal
 * @param {string} source - Source section
 */
export const trackModalOpen = (modalName, source) => {
  // Facebook Pixel - InitiateCheckout (user showing interest)
  trackFBEvent('InitiateCheckout', {
    content_name: modalName,
    content_category: 'modal_open',
    source: source
  });

  // GA4 - modal_open
  trackGA4Event('modal_open', {
    modal_name: modalName,
    trigger_source: source
  });
};

/**
 * Track Modal Close
 * @param {string} modalName - Name of the modal
 */
export const trackModalClose = (modalName) => {
  // GA4 - modal_close
  trackGA4Event('modal_close', {
    modal_name: modalName
  });
};

/**
 * Track Video Play
 * @param {string} videoTitle - Title of the video
 * @param {string} source - Source section
 */
export const trackVideoPlay = (videoTitle, source) => {
  // Facebook Pixel - ViewContent
  trackFBEvent('ViewContent', {
    content_name: videoTitle,
    content_type: 'video',
    content_category: 'video_play',
    source: source
  });

  // GA4 - video_start
  trackGA4Event('video_start', {
    video_title: videoTitle,
    video_source: source
  });
};

/**
 * Track External Link Click
 * @param {string} url - URL clicked
 * @param {string} linkName - Name/description of the link
 * @param {string} source - Source section
 */
export const trackExternalLink = (url, linkName, source) => {
  // Facebook Pixel - Custom event
  trackFBCustomEvent('ExternalLinkClick', {
    link_url: url,
    link_name: linkName,
    source: source
  });

  // GA4 - click (outbound)
  trackGA4Event('click', {
    link_url: url,
    link_text: linkName,
    link_domain: new URL(url).hostname,
    outbound: true,
    click_source: source
  });
};

/**
 * Track YouTube Channel/Video Click
 * @param {string} videoId - YouTube video ID or 'channel'
 * @param {string} source - Source section
 */
export const trackYouTubeClick = (videoId, source) => {
  // Facebook Pixel - ViewContent
  trackFBEvent('ViewContent', {
    content_name: 'youtube_content',
    content_type: 'video',
    content_id: videoId,
    source: source
  });

  // GA4 - youtube_click
  trackGA4Event('youtube_click', {
    video_id: videoId,
    click_source: source
  });
};

/**
 * Track FAQ Interaction
 * @param {number} faqIndex - Index of the FAQ
 * @param {string} question - FAQ question text
 * @param {string} action - 'expand' or 'collapse'
 */
export const trackFAQInteraction = (faqIndex, question, action) => {
  // GA4 - faq_interaction
  trackGA4Event('faq_interaction', {
    faq_index: faqIndex,
    faq_question: question.substring(0, 100), // Truncate for GA4
    interaction_type: action
  });
};

/**
 * Track Section View (for scroll tracking)
 * @param {string} sectionName - Name of the section
 */
export const trackSectionView = (sectionName) => {
  // Facebook Pixel - ViewContent
  trackFBEvent('ViewContent', {
    content_name: sectionName,
    content_type: 'section'
  });

  // GA4 - section_view
  trackGA4Event('section_view', {
    section_name: sectionName
  });
};

/**
 * Track Scroll Depth
 * @param {number} percentage - Scroll depth percentage
 */
export const trackScrollDepth = (percentage) => {
  // GA4 - scroll
  trackGA4Event('scroll', {
    percent_scrolled: percentage
  });
};

/**
 * Track Schedule/Book Event
 * @param {string} eventType - Type of scheduling (counseling, demo, etc.)
 * @param {string} source - Source section
 */
export const trackSchedule = (eventType, source) => {
  // Facebook Pixel - Schedule
  trackFBEvent('Schedule', {
    content_name: eventType,
    source: source
  });

  // GA4 - schedule_event
  trackGA4Event('schedule_event', {
    event_type: eventType,
    schedule_source: source
  });
};

/**
 * Track Location/Map Click
 * @param {string} source - Source section
 */
export const trackLocationClick = (source) => {
  // Facebook Pixel - FindLocation
  trackFBEvent('FindLocation', {
    source: source
  });

  // GA4 - location_click
  trackGA4Event('location_click', {
    click_source: source
  });
};

// ============================================
// INITIALIZATION CHECK
// ============================================

/**
 * Check if analytics are properly initialized
 * @returns {object} Status of FB Pixel and GA4
 */
export const checkAnalyticsStatus = () => {
  const status = {
    fbPixel: typeof window !== 'undefined' && typeof window.fbq === 'function',
    ga4: typeof window !== 'undefined' && typeof window.gtag === 'function'
  };
  console.log('[Analytics Status]', status);
  return status;
};
