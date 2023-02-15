import { usePromiseTracker } from 'react-promise-tracker';
import { ColorRing } from 'react-loader-spinner';

export default function LoadingIndicator() {
    const { promiseInProgress } = usePromiseTracker({ delay: 500 });    
    return (
        <div title='spinner'>
            {promiseInProgress === true ? (
                <div className="spinner-modal">
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                            '#e15b64',
                            '#f47e60',
                            '#f8b26a',
                            '#abbd81',
                            '#849b87',
                        ]}
                    />
                </div>
            ) : null}
        </div>
    );
}
