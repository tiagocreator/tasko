import { CheckBoxStyle } from './styles/CheckBoxStyles';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const checkVariants = {
  initial: {
    color: '#fff',
  },

  checked: {
    pathLength: 1,
  },

  unChecked: {
    pathLength: 0,
  },
};

const boxVariants = {
  checked: {
    background: '#ff705d',
    transition: { duration: 0.1 },
  },

  unChecked: {
    background: '#dedfe1',
    transition: { duration: 0.1 },
  },
};

const CheckBox = ({ checked, handleCheck }) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <CheckBoxStyle>
      <motion.div
        className="svgBox"
        variants={boxVariants}
        animate={checked ? 'checked' : 'unChecked'}
        onClick={handleCheck}
      >
        <svg
          className="svg"
          viewBox="0 0 53 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={checkVariants}
            animate={checked ? 'checked' : 'unChecked'}
            style={{ pathLength, opacity }}
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="6"
            d="M1.5 22L16 36.5L51.5 1"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </CheckBoxStyle>
  );
};

export default CheckBox;
