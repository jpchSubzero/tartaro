import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

export const PostCreate = (props) => {
    return (
        <Create title="Crear un post" {...props}>
            <SimpleForm>
                <TextInput label='Título' source="title" />
                <TextInput label='Texto' multiline source="body" />
                <DateInput label='Publicado en' source="publishedAt" />
            </SimpleForm>
        </Create>
    )
}
