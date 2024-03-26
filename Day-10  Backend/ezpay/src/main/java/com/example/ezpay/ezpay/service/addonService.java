package com.example.ezpay.ezpay.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ezpay.ezpay.dto.AddOnDTO;
import com.example.ezpay.ezpay.model.AddOn;
import com.example.ezpay.ezpay.repository.addonRepository;


@Service
public class addonService {
    
    @Autowired
    private addonRepository AddonRepository;
    
    @SuppressWarnings("null")
    public AddOn addAddon(AddOnDTO addonDTO) {
        AddOn addon = new AddOn();
        addon.setAddonName(addonDTO.getAddonName());
        addon.setAddonPrice(addonDTO.getAddonPrice());
        addon.setAddonDetails(addonDTO.getAddonDetails());
        addon.setAddonValidity(addonDTO.getAddonValidity());
        addon.setAddonData(addonDTO.getAddonData());
        addon.setAddonType(addonDTO.getAddonType());
        addon.setAddonSpeed(addonDTO.getAddonSpeed());
        return AddonRepository.save(addon);
    }

    public List<AddOn> getAllAddons() {
        return AddonRepository.findAll();
    }

    @SuppressWarnings("null")
    public AddOn getAddonById(Long addonId) {
        return AddonRepository.findById(addonId).orElse(null);
    }

    public void editAddon(Long addonId, AddOn updatedAddonData) {
        AddonRepository.updateAddon(addonId,
                                     updatedAddonData.getAddonName(),
                                     updatedAddonData.getAddonPrice(),
                                     updatedAddonData.getAddonDetails(),
                                     updatedAddonData.getAddonValidity(),
                                     updatedAddonData.getAddonData(),
                                     updatedAddonData.getAddonType(),
                                     updatedAddonData.getAddonSpeed());
    }

    @SuppressWarnings("null")
    public void deleteAddon(Long addonId) {
        
        AddonRepository.deleteById(addonId);
    }
}
