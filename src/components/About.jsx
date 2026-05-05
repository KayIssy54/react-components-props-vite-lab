const DEFAULT_IMAGE = "https://via.placeholder.com/215";

function About({ about, image = DEFAULT_IMAGE }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;