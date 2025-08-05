import { ButtonContainer } from "./styles.js";

const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} type="button">
      {label}
    </ButtonContainer>
  );
};

export default Button;
