import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { saveAs } from 'file-saver';
import FinancialStatementAPI from '../../../api/FinancialStatementAPI';
import { AlertContext } from '../../../contexts/AlertContext';
import { alertFailed, alertSuccess } from '../../../redux/actions/alertAction';

const useStatementsService = () => {
  const snackbarRef = useContext(AlertContext);
  const dispatch = useDispatch();

  const downloadPDF = useCallback((month, year) => {
    FinancialStatementAPI.downloadStatement(month, year)
      .then((res) => {
        const blob = new Blob([res.data], { type: 'application/octetstream' });

        if (blob) saveAs(blob, 'ServindoFinancialStatement.pdf');

        dispatch(alertSuccess('Download success'));
        snackbarRef.current.show();
      })
      .catch(() => {
        dispatch(
          alertFailed({
            message: 'Download failed',
            description: 'Internal server error!',
          })
        );
        snackbarRef.current.show();
      });
  }, []);

  return {
    downloadPDF,
  };
};

export default useStatementsService;
