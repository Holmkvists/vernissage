import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const redirect = useNavigate();

  const goBack = () => {
    redirect(-1);
  };

  return (
    <button className="back-button" onClick={goBack}>
      <i className="bi bi-arrow-left"></i>
    </button>
  );
};
