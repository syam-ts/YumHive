

export const filterData = (searchText, allRestaurant) => {
    const founded = allRestaurant.filter((restaurant) =>
      restaurant?.info?.name.includes(searchText)
    )
    return founded
  }


