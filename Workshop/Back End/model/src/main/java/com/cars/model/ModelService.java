package com.cars.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModelService {
    @Autowired
    private ModelRepo mr;

    public List<Model> savedata(List<Model> e){
        return mr.saveAll(e);
    }
    public List<Model>getAll(){
        return mr.findAllModelsQuery();
    }
    public void deleteModelById(int id){
        mr.deleteById(id);
    }
    public Model saveOrUpdate(int id,Model e){
        return mr.saveAndFlush(e);
    }

}
