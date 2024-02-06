import LogoPicture from '../assets/Logo.png';

export default function Logo() {
  return (
    <div className="flex h-[30px] w-[135px] items-center gap-2">
      <img src={LogoPicture} />
      <h2 className="text-tertiary text-center text-xs">Place Holder Co.</h2>
    </div>
  );
}
