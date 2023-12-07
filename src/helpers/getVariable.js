import axios from 'axios';
import { XMLParser } from 'fast-xml-parser'

export default async function getVariableValueFromId(ise_id) {
    ise_id=51343;
    const sid='jkuNGZthXWgqrNxg';
    
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `http://192.168.200.102/addons/xmlapi/sysvar.cgi?sid=${sid}&ise_id=${ise_id}`,
        })
        .then(function (response) {
            // console.log(response.data)
            let datastring=response.data;
            const options = {
                ignoreAttributes: false,
                attributeNamePrefix : "a_"
            };

            const parser = new XMLParser(options);
            const output = parser.parse(datastring);
            const variable_value = output['systemVariables']['systemVariable']['a_variable'] 
            const variable_name = output['systemVariables']['systemVariable']['a_name']
            console.log(`Die Variable '${variable_name}' hat den Wert '${variable_value}'`);

            resolve(variable_value);
        }).catch((error) => {
            reject(error);
        });
    });
}

    // const datastring = `<systemVariables><systemVariable name="STATUS_BESUCH" variable="1" value="true" value_list="" value_text="" ise_id="30952" min="" max="" unit="" type="2" subtype="2" timestamp="1701954469" value_name_0="nein" value_name_1="ja"/></systemVariables>`



