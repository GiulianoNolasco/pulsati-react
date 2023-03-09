interface MenuItemProps {
  titulo: string;
  onClick?: () => void;
  path?: string;
}

export function MenuItem(props: MenuItemProps) {
  if (props.path) {
    return <a href={props.path}>{props.titulo}</a>;
  }
  return <span onClick={props.onClick}>{props.titulo}</span>;
}
