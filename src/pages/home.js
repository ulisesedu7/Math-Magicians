import React from 'react';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home-container">
        <h2>Welcome to the Math Magicians Page</h2>

        <article>
          <p>
            Mathematics (from Ancient Greek &apos;máthēma&apos;:
            &apos;knowledge, study, learning&apos;)
            is an area of knowledge that
            includes such topics as numbers (arithmetic, number theory),
            formulas and related structures (algebra),
            shapes and the spaces in which they are contained (geometry),
            and quantities and their changes (calculus and analysis).
          </p>

          <p>
            Mathematics is widely used in science for modeling phenomena.
            This enables the extraction of quantitative predictions from experimental laws.
            For example, the movement of planets can be accurately predicted using Newton&apos;s
            law of gravitation combined with mathematical computation.
            The independence of mathematical truth from any experimentation implies that
            the accuracy of such predictions depends only on the adequacy
            of the model for describing the reality.
            Inaccurate predictions imply the need for improving or changing mathematical models,
            not that mathematics is wrong in the models themselves.
            For example, the perihelion precession of Mercury cannot be explained by Newton&apos;s
            law of gravitation
            but is accurately explained by Einstein&apos;s general relativity.
            This experimental validation of Einstein&apos;s theory shows that Newton&apos;s
            law of gravitation is only an approximation, though accurate in everyday application.
          </p>
        </article>
      </div>
    );
  }
}

export default HomePage;
