export const colorCode = (color: string): number => {
  const colros: string[] = [ "black", 
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"]
    return colors.findIndex(x => x === color)
}

export const colors: string[] = [ "black", 
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white"]
