import _ from 'lodash';

const Mahasiswa = [
    { nama: 'kevin', email: 'kevin@gmail.com'},
    { nama: 'ameng', email: 'ameng@gmail.com'},
    { nama: 'dina', email: 'dina@gmail.com'},
];

const mhs = _.find(Mahasiswa, {nama: 'kevin'});
console.log(mhs);