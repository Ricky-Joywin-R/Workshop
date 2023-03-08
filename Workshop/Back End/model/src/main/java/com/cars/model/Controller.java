package com.cars.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class Controller {
    @Autowired
    ModelService ms;
    
    @PostMapping("/savedata")
    public String savingModels(@RequestBody List<Model> model){
        ms.savedata(model);
        return "saved";
    }
    @GetMapping("/findall")
        public List<Model> getEvery(){
            List<Model>allModels=ms.getAll();
            return allModels;
    }
    @DeleteMapping("/modelid/{id}")
    public void deleteModel(@PathVariable("id")int id){
        ms.deleteModelById(id);
    }
    @PutMapping("/update/{id}")
    public Model updateModel(@PathVariable int id,@RequestBody Model model){
        return ms.saveOrUpdate(id,model);
    }
}
