const Offers = () => {
  return (
    <section className="offers">
      <div className="offers__container container">
        <div className="offers__block">
          <h3 className="offers__title">
            stay up to date about our latest offers
          </h3>
          <form
            className="offers__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="offers__email">
              <input
                type="email"
                name="offers-email"
                placeholder="Enter your email address"
              />
              <img src="/img/icons/email.svg" alt="email" />
            </div>
            <button type="submit" className="offers__btn">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Offers;
