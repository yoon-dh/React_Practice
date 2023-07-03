function Student({ name, dispatch, id }) {
  return (
    <div>
      <span>{name}</span>
      <button
        onClick={() => {
          dispatch({ type: "delete-student", payload: name });
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Student;
