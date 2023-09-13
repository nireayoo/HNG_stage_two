const Person = require('../models/Person');

//Get all persons
const getPersons = async (req,res) =>{
    try{
        const persons = await Person.find();
        res.status(200).json(persons);

    }catch(err){
        console.log(err);
        return res.status(500).json({message: "persons not found"});
    }
};

//Get person by ID
const getPerson = async (req,res) =>{
    try{
        const person = await Person.findById(req.params.user_id);
        if(!person){
            return res.status(500).json({message: "person not found"});

        }
        res.status(200).json(person);

    }catch(err){
        return res.status(500).json(err);
    }

};
//create
const createPerson = async (req,res) =>{
    try{
        const {name} = req.body;
        const person = await Person.create({name});
        person.save();
        res.status(201).json(person);

    }catch(err){
        return res.status(500).json(err);

    }  
};

const updatePerson = async (req,res) =>{
    try{
        const person = await Person.findById(req.params.user_id);
        if(!person){
            return res.status(404).json({ error: 'Person not found' });

        }
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.user_id,
            req.body,
            {new:true}
        );
        res.status(200).json(updatedPerson);

    }catch(err){
        return res.status(500).json(err);

    }  
};

const deletePerson = async (req,res) =>{
    try{
        const deletePerson = await Person.findByIdAndDelete(req.params.user_id);
    if(!deletePerson){
        res.status(404).json({ error: 'Person not found' });
    }
    res.status(200).json({message: 'person has been deleted!'});
    }catch(err){
        return res.status(500).json(err);

    }    
};

module.exports ={
    getPersons,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson,
}