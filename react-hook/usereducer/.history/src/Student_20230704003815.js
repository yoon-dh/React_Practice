function Student({ name, dispatch, id, isHere }) {
  return (
    <div>
      <span>{name}</span>
      <button
        onClick={() => {
          dispatch({ type: "delete-student", payload: { id } });
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Student;
