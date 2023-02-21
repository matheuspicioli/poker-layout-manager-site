import icon from '../../public/favico.png';

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Poker layout manager</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="poker layout manager screens" name="keywords" />
      <meta content="Poker layout manager" name="description" />

      <link href={icon.src} rel="icon" />
    </>
  );
}
