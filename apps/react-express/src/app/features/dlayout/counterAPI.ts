// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 1000)
  );
}

export function fetchLayout(amount = 1) {
  console.log('fetchLayout: ')
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => resolve( {
      data:[
        {
          title: 'Section Title',
          fluid: true,
          cols: ['4', '4', '4', '4', '4', '4'],
          featureTypesArry: ['a'],
        }
      ]     
    } ), 1000)
  );
}
