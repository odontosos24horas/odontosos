import React, { useRef, useState } from 'react'
import { Field, Form, Formik } from 'formik'

import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, useToast, Text } from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'

const NextContactUs = () => {
  const [fileText, setFileText] = useState<string>('Arquivo deve estar em pdf')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const toast = useToast()

  const [buttonText, setButtonText] = useState('Enviar contato')

  const handleGetFile = () => {
    inputRef.current?.click()
    if (inputRef.current?.files && inputRef.current?.files[0]) {
      setFileText(inputRef.current?.files[0].name)
    }
  }

  const handleValidationName = (value: any) => {
    let error = ''
    if (!value) {
      error = 'Nome é necessário'
    }
    return error
  }

  const handleValidationEmail = (value: any) => {
    let error = ''
    if (!value) {
      error = 'E-mail é necessário'
    }
    return error
  }

  const handleValidationPhone = (value: any) => {
    let error = ''
    if (!value) {
      error = 'Telefone é necessário'
    }
    return error
  }

  const handleSubmit = async (values: any) => {
    if (handleValidationName(values.name) === '' && handleValidationEmail(values.email) === '' && handleValidationPhone(values.phone) === '') {
      setButtonText('Enviando...')
      await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: values.email,
          fullname: values.name,
          subject: values.name,
          message: `${values.email}: ${values.name} : ${values.phone}`
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
        .then(() => {
          toast({
            title: 'Sucesso',
            description: 'E-mail foi enviado com sucesso',
            status: 'success',
            duration: 9000,
            isClosable: true
          })
          setButtonText('Enviar contato')
        })
        .catch(error => {
          toast({
            title: 'Tivemos um erro ao enviar seu e-mail.',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true
          })
        })
    }
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: ''
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values)
        actions.setSubmitting(false)
      }}
    >
      {props => (
        <Form>
          <Field name="name" validate={handleValidationName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name" color="white">
                  Nome:
                </FormLabel>
                <Input {...field} id="name" placeholder="nome" bg="white" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email" validate={handleValidationEmail}>
            {({ field, form }: any) => (
              <FormControl mt={4} isInvalid={form.errors.email && form.touched.email}>
                <FormLabel htmlFor="email" color="white">
                  E-mail:
                </FormLabel>
                <Input {...field} id="email" placeholder="seu melhor e-mail" bg="white" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="phone" validate={handleValidationPhone}>
            {({ field, form }: any) => (
              <FormControl mt={4} isInvalid={form.errors.phone && form.touched.phone}>
                <FormLabel htmlFor="phone" color="white">
                  Telefone:
                </FormLabel>
                <Input {...field} id="phone" placeholder="(00) 00000-0000" bg="white" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="file" validate={handleValidationPhone}>
            {({ form }: any) => (
              <FormControl display='flex' mt={8} isInvalid={form.errors.phone && form.touched.phone}>
                <Button onClick={handleGetFile}>Adicione seu currículo</Button>
                <Text ms={2} mt={3} color="white">
                  {fileText}
                </Text>
                <Input
                  display="none"
                  id="getFile"
                  type="file"
                  name="arquivo"
                  bg="white"
                  onChange={handleGetFile}
                  ref={(e) => {
                    inputRef.current = e
                  }}
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Box mt={8}>
            <NextButton bg="next-dark" isLoading={props.isSubmitting} type="submit">
              {buttonText}
            </NextButton>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default NextContactUs
