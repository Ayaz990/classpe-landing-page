export const ZohoForm = () => {
  return (
    <div className="zoho-form-container">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Get a <span className="text-primary">Call Back</span>
      </h3>

      <iframe
        src="https://forms.zohopublic.in/classpe/form/ContactNow/formperma/o5uOEjjWZzLyV0bAhdjWwn1VF2f_5WGI-Ehb2oolMjY"
        width="100%"
        frameBorder="0"
        style={{
          border: 'none',
          borderRadius: '12px',
          height: '1100px',
          overflow: 'hidden'
        }}
        aria-label="Contact Now"
        title="Contact Now Form"
        scrolling="no"
      />
    </div>
  )
}