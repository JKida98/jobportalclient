import { Formik } from 'formik';
import TextInput from '../../components/formInputs/TextInput';

interface IOfferFormProps {
    initialValues: any;
    externalSubmit: any;
    externalRef: any;
}

const OfferForm: React.FC<IOfferFormProps> = ({ initialValues, externalSubmit, externalRef }) => {
    return (
        <Formik innerRef={externalRef} initialValues={initialValues} onSubmit={(values: IOfferFormProps) => externalSubmit(values)}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <TextInput name="title" displayName="Email" />
                    <TextInput name="description" displayName="Password" hidden />
                    <TextInput name="hourlyPrice" displayName="Hourly price" />
                </form>
            )}
        </Formik>
    );
};

export default OfferForm;
