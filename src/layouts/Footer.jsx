
const Footer = () => {
  return (
    <footer className="mt-auto dark-blue-background text-white">
      <div className="container p-4 d-flex justify-content-between align-items-center">
        {/* {!isMobile && <section> <BuildInfo /></section>} */}

        <section className="text-center flex-grow-1 text-white">
          <a href="https://www.ncdps.gov/employee-directory" target="_blank" rel="noopener noreferrer" className="text-white">Employee Directory</a>
          <span className="mx-2">|</span>
          <a href="https://www.ncdps.gov/webform/user_feedback?source_entity_type=node&source_entity_id=4199" target="_blank" rel="noopener noreferrer" className="text-white">Website Feedback</a>
          <span className="mx-2">|</span>
          <a href="https://www.nc.gov/disclaimer-terms-use" target="_blank" rel="noopener noreferrer" className="text-white">Disclaimer and Terms of Use</a>
          <span className="mx-2">|</span>
          <a href="https://www.nc.gov/privacy" target="_blank" rel="noopener noreferrer" className="text-white">Privacy Policy</a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
