function find(the_list) {
  floor = 1
  ceiling = the_list.length - 1

  while (floor < ceiling) {
    midpoint = floor + Math.floor((ceiling - floor) / 2)
    lower_floor = floor
    lower_ceiling = midpoint
    upper_floor = midpoint+1
    upper_ceiling = ceiling

    items_in_lower_range = 0

    for (i = 0; i < the_list.length; i++) {
      if (the_list[i] >= lower_floor && the_list[i] <= lower_ceiling) {
        items_in_lower_range++;
      }
    }

    distinct_possible_integers_in_lower_range = ((lower_ceiling - lower_floor) + 1);

    if ((items_in_lower_range > distinct_possible_integers_in_lower_range)) {
      floor = lower_floor;
      ceiling = lower_ceiling;
    }
    else {
      floor = upper_floor;
      ceiling = upper_ceiling;
    }
  }
  return floor;
}

var intList = [6, 2, 3, 4, 1, 4, 4];

result = find(intList)
console.log(result)
