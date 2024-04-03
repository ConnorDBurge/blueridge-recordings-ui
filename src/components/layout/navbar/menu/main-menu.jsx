import MenuItem from "./menu-item";

export default function MainMenu({ primaryMenu, secondaryMenu }) {
  return (
    <div
      id="main-menu"
      className="md:flex hidden overflow-hidden justify-between items-center"
    >
      <ul className="flex">
        {primaryMenu?.items.map((item) => (
          <MenuItem key={item?.id} item={item} />
        ))}
      </ul>
      <ul className="flex">
        {secondaryMenu?.items.map((item) => (
          <MenuItem key={item?.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
