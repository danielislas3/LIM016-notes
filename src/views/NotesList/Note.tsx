import { RiMore2Fill } from "react-icons/ri";

const Note = () => {
  return (
    <div className="note">
      <span>Hola, soy uina nota!</span>
      <div className="note-footer">

        <small>20/2/22</small>
        <RiMore2Fill  className="options-icon" size="1.5rem"/>
      </div>

    </div>
  );
}

export default Note;