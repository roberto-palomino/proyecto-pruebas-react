export const ChooseRandomStudent = () => {
  const students = [
    {
      name: 'Alice',
      status: 1,
    },
    {
      name: 'Bob',
      status: 1,
    },
    {
      name: 'Charlie',
      status: 0,
    },
    {
      name: 'Diana',
      status: 1,
    },
    {
      name: 'Emma',
      status: 1,
    },
    {
      name: 'Frank',
      status: 1,
    },
  ];
  const asistentes = students.filter(student => student.status === 1);
  const numAsistentes = asistentes.length;

  const [index, setIndex] = useState(null);

  const handleClick = e => {
    const randomIndex = Math.floor(Math.random() * numAsistentes);
    setIndex(randomIndex);
  };

  return (
    <div className='random-student'>
      <h1 style={{ fontSize: '5em' }}>
        {index === null
          ? 'Pulsa para elegir un ganador'
          : asistentes[index].name}{' '}
      </h1>
      <button onClick={handleClick}>Elegir ganador</button>
    </div>
  );
};

/* const asistentes = alumnos.filter(alumno => alumno.status === 1);

const randomStudent = () => {
  const id = Math.round(Math.random() * (asistentes.length - 1));
  return id;
};

return (
  <form>
    <Winner name={asistentes[reandomStudent()].name}></Winner>
    <button type='submit' onClick={randomStudent}>
      Elegir alunmo
    </button>
  </form>
);

const Winner = ({ name }) => <h1>{name}</h1>;
export default Alumnos; */
