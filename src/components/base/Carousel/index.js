/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import cx from "classnames";
import Image from "next/image";
import styles from "../Carousel/Carousel.module.scss";
// eslint-disable-next-line import/no-extraneous-dependencies
// import '@splidejs/splide/dist/css/splide.min.css';
// import Button from '~baseComponents/Buttons/Button/Button';

const Carousel = React.forwardRef((props, ref) => {
  const { items, options, className } = props;

  return (
    <div className={cx(styles.component, className)}>
      <Splide ref={ref} options={options}>
        {items.map((item, index) => (
          <SplideSlide key={`carousel-slide-${index}`}>
            {item.content ? (
              item.content
            ) : (
              <Image
                layout="intrinsic"
                src={item.image}
                className={styles.image}
                width={356}
                height={356}
              />
            )}
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
});

export default Carousel;
