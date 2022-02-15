import { Formik } from 'formik';
import NumberInput from '../../components/formInputs/NumberInput';
import TextareaInput from '../../components/formInputs/TextareaInput';
import TextInput from '../../components/formInputs/TextInput';

interface IOfferFormProps {
    initialValues: any;
    externalSubmit: any;
    externalRef: any;
}

const OfferForm: React.FC<IOfferFormProps> = ({ initialValues, externalSubmit, externalRef }) => {
    return (
        <Formik
            innerRef={externalRef}
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => externalSubmit(values)}
        >
            {({ values }) => (
                <form>
                    <TextInput value={values.title} name="title" />
                    <TextareaInput value={values.description} name="description" />
                    <NumberInput
                        value={values.hourlyPrice}
                        name="hourlyPrice"
                        displayName="Hourly price"
                    />
                </form>
            )}
        </Formik>
    );
};

export default OfferForm;
