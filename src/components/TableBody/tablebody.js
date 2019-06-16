import React from "react";

function TableBody(props) {
    //This is a function (not a class) so it does not require a render
    return (
        <tbody>
            <tr>
                <td>
                   {props.listItem}
                </td>
            </tr>
        </tbody>
    );
}

export default TableBody;

