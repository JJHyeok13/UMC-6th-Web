import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div>Oops!</div>
      <div>예상치 못한 에러가 발생했습니다!</div>
      <div>Not Found</div>
      <Link to="/">메인으로 이동하기</Link>
    </div>
  );
};

export default NotFoundPage;
