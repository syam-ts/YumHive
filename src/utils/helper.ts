export const filterData = (searchText: any, allRestaurant: any) => {
    const founded = allRestaurant.filter((restaurant: any) =>
      restaurant?.info?.name.includes(searchText)
    )
    return founded
  }


