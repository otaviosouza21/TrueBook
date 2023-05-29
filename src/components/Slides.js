import React from 'react';
import styles from '../assets/css/Slide.module.css';
import arrow from '../assets/img/arrow.svg';

const Slides = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slideNext() {
    if (active < slides.length - 1) {
      setActive(active + 1);
    }
  }

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }
  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.conteudo}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <span onClick={slidePrev}>
          <img src={arrow} alt="" />
        </span>
        <span onClick={slideNext}>
          <img src={arrow} alt="" />
        </span>
      </nav>
    </section>
  );
};

export default Slides;
