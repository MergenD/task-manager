require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('63df5d7e6aa9e010517caa1e')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteUserAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteUserAndCount('63df4f1eee00fc7a7e849434')
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
