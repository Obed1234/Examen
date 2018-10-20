import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/GRid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = {
buttonArea:{
}
}
class SignUp extends React.Component {
    state = {
        fields:[
            {
                field:'nombre',
                label:'Nombre',
                valor:' ',
                type:'text',
                id:0,
            },
            {
                field:'apellido',
                label:'Apellido',
                valor:' ',
                type:'text',
                id:1,
            },
            {
                field:'correo',
                label:'Correo',
                valor:' ',
                type:'text',
                id:2,
            },
            {
                field:'password',
                label:'Password',
                valor:' ',
                type:'text',
                id:3,
            },
            {
                field:'hola',
                label:'soy el nuevo text fields',
                valor:' ',
                type:'text',
                id:4,
            }
        ]
    }
    cambiartexto = (id) => event =>{

    }
    render() {
        const { classes} = this.props
        const MappingFields =p => (
            <TextField
                id={p.field}
                label={p.label}
                value={p.valor}
                key={p.field + p.id}
                onChange={this.cambiartexto(p.id)}
            />
        )
        return(
            <div>
                <Grid container>
                    <Grid item xs= {6}>
                    {this.state.fields.map(MappingFields)}
                    <Button  classname={classes.buttonArea}>
                        soy un button
                    </Button>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(SignUp)