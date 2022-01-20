function Avatar({ name }) {
  return (
    <div className='avatar'>
      <img src={`/avatars/${name}.png`} alt='imagen de usuario' />
      <span>{name}</span>
    </div>
  );
}
export default Avatar;
