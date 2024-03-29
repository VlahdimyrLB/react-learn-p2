import avatar from "../../../assets/default-avatar.svg";
const Person = ({ name, nickName, images }) => {
  //   const img =
  //     (images && images[0] && images[0].small && images[0].small.url) ||
  //     "No Image Found";
  //or simply use ?. if theres then
  //we can also use ?? nullish coalescing instead of OR ||
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h2>{name}</h2>
      <p>Nickname: {nickName || "Bruhh"}</p>
    </div>
  );
};
export default Person;
