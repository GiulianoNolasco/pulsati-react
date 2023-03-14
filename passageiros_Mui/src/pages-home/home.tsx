import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// import "./home.css";

export function Home() {
  const itemData = [
    {
      img: "http://lorempixel.com.br/500",
      title: "a",
    },
    {
      img: "http://lorempixel.com.br/501",
      title: "b",
    },
    {
      img: "http://lorempixel.com.br/502",
      title: "c",
    },
  ];
  return (
    <ImageList sx={{ width: 1800, height: 700 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
