function collect_same_elements(collection_a, object_b)
{
  var newArray = [];
  for (var i = 0; i < collection_a.length; i++)
  {
    if (isEqual(collection_a[i].key, object_b))
    {
      newArray.push(collection_a[i].key);
    }
  }

  return newArray;
}

function isEqual(element, object)
{
  for (var i = 0; i < object.value.length; i++)
  {
    if (element === object.value[i])
    {
      return true;
    }
  }
}

module.exports = collect_same_elements;
