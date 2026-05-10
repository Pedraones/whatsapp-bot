function treatmentResponseBD(res){
    let response = res;
    response = response.replace("(", "");
    response = response.replace(")", "");
    
    const fields = response.split(",");

    for(let i = 0; i < fields.length; i++){
        fields[i] = fields[i].replaceAll('"', '');
        fields[i] = fields[i].trimEnd();
    }
    const responseTreated = fields;
    return responseTreated;
}

module.exports = {
    treatmentResponseBD: treatmentResponseBD
}