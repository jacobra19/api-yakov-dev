"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: connect to real database
const mock = [
    {
        id: '1',
        name: 'John Doe',
        age: 30,
    },
    {
        id: '2',
        name: 'Jane Doe',
        age: 25,
    },
    {
        id: '3',
        name: 'Jack Doe',
        age: 20,
    },
    {
        id: '4',
        name: 'Jill Doe',
        age: 35,
    },
];
const getMembers = (req, res) => {
    const { ids } = req.body;
    if ((ids === null || ids === void 0 ? void 0 : ids.length) === 1 && (ids === null || ids === void 0 ? void 0 : ids[0]) === '*') { // get all members
        return res.send(mock);
    }
    else if ((ids === null || ids === void 0 ? void 0 : ids.length) > 0) { // get members by ids
        const members = mock.filter((member) => ids.includes(member.id));
        return res.send(members);
    }
    else
        return res.send([]); // no members
};
exports.default = getMembers;
